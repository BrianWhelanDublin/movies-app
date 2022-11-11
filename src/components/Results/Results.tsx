import React, { useCallback, useRef } from "react";
import { MediaItem } from "../../types/types";
import MediaCard, { MediaCardRef } from "../MediaCard/MediaCard";
import { ResultsContainer, ResultsScrollContainer } from "./Results.styles";

interface ResultsProps {
  items: Array<MediaItem>;
  loading?: boolean;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  hasMore?: boolean;
  mediaType?: string;
}

const Results = React.memo<ResultsProps>(({ items, loading, setPage, hasMore, mediaType }) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const lastElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;

      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && hasMore) {
              setPage((prev) => prev + 1);
            }
          });
        },
        { threshold: 0.5 }
      );

      if (node) observer.current.observe(node);
    },
    [loading, hasMore, setPage]
  );

  return (
    <ResultsScrollContainer>
      <ResultsContainer>
        {items ? (
          items?.map((el, i) => {
            if (el.poster_path !== null) {
              if (items.length === i + 1) {
                return (
                  <MediaCardRef
                    ref={lastElementRef}
                    key={`${el.id}-${i}`}
                    media={el}
                    href={`/${mediaType === "tv" ? "series" : "movie"}/${el.id}`}
                  />
                );
              } else {
                return <MediaCard key={`${el.id}-${i}`} media={el} href={`/${mediaType === "tv" ? "series" : "movie"}/${el.id}`} />;
              }
            }
          })
        ) : (
          <p>No items found for this genre</p>
        )}
        {loading && <p>Loading more ....</p>}
      </ResultsContainer>
    </ResultsScrollContainer>
  );
});

export default Results;
