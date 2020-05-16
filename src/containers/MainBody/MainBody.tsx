import React, { useEffect, useState, useCallback } from "react";

import Face from "types/Face";
import { host, requestOptions } from "utils/constants";
import { EndBadge, Settings, Wrapper } from "./styles";
import ListItems from "components/ListItems";

type sortBy = "id" | "price" | "size";

const MainBody = () => {
  const [sortBy, setSortBy] = useState<sortBy>("price");
  const [nextPage, setNextPage] = useState<number>(2);
  const [faces, setFaces] = useState<Face[]>([]);
  const [nextFaces, setNextFaces] = useState<Face[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAllDataFetched, setIsAllDataFetched] = useState<boolean>(false);

  const loadFaces = async (first?: boolean) => {
    const productsURL = `${host}products?_sort=${sortBy}&_page=${
      first ? 1 : nextPage
    }&_limit=15`;
    const response = await fetch(productsURL, requestOptions);
    const newFaces: Face[] = await response.json();

    if (newFaces.length === 0) {
      setIsAllDataFetched(true);
    }

    if (first) {
      setFaces(newFaces);
      setIsLoading(false);
      await loadFaces();
    } else {
      setNextFaces(newFaces);
      setIsLoading(false);
      setNextPage(nextPage + 1);
    }
  };

  const loadFacesCallback = useCallback(loadFaces, [faces, nextPage, sortBy]);

  const onChangeSortBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as sortBy;
    setSortBy(value);
    setIsLoading(true);
    setFaces([]);
    setNextPage(2);
  };

  useEffect(() => {
    if (isLoading && faces.length === 0) {
      loadFacesCallback(true);
    }
  }, [loadFacesCallback, isLoading, faces]);

  useEffect(() => {
    const loadOnScroll = async () => {
      const scrollTop =
        (document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop;
      const scrollHeight =
        (document.documentElement && document.documentElement.scrollHeight) ||
        document.body.scrollHeight;
      const clientHeight =
        (document.documentElement && document.documentElement.clientHeight) ||
        window.innerHeight;
      const scrolledToBottom = scrollTop + clientHeight >= scrollHeight;

      if (scrolledToBottom && !isLoading && !isAllDataFetched) {
        setIsLoading(true);
        setFaces([...faces, ...nextFaces]);
        await loadFacesCallback();
      }
    };
    window.addEventListener("scroll", loadOnScroll);
    return () => window.removeEventListener("scroll", loadOnScroll);
  }, [loadFacesCallback, isLoading, isAllDataFetched]);

  return (
    <Wrapper>
      <Settings>
        <span>
          <label htmlFor="sort">Sort By </label>
          <select id="sort" value={sortBy} onChange={onChangeSortBy}>
            <option value="id">id</option>
            <option value="price">price</option>
            <option value="size">size</option>
          </select>
        </span>
        <span>Showing {faces.length} results</span>
      </Settings>
      <ListItems faces={faces} isLoading={isLoading} />
      {isAllDataFetched && (
        <EndBadge>
          <span>~ end of catalogue ~</span>
        </EndBadge>
      )}
    </Wrapper>
  );
};

export default MainBody;
