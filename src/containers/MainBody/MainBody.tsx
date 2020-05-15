import React, { useEffect, useState } from "react";

import Face from "types/Face";
import { host, requestOptions } from "utils/constants";
import { EndBadge, Settings, Wrapper } from "./styles";
import ListItems from "components/ListItems";

type sortBy = "id" | "price" | "size";

const MainBody = () => {
  const [sortBy, setSortBy] = useState<sortBy>("id");
  const [page, setPage] = useState<number>(1);
  const [faces, setFaces] = useState<Face[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAllDataFetched, setIsAllDataFetched] = useState<boolean>(false);

  const loadFaces = async () => {
    const productsURL = `${host}products?_sort=${sortBy}&_page=${page}&_limit=15`;
    const response = await fetch(productsURL, requestOptions);
    const newFaces: Face[] = await response.json();
    setFaces([...faces, ...newFaces]);
    setPage(page + 1);
    setIsLoading(false);
    if (newFaces.length === 0) {
      setIsAllDataFetched(true);
    }
  };

  const onChangeSortBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as sortBy;
    setSortBy(value);
    setIsLoading(true);
    setFaces([]);
    setPage(1);
  };

  useEffect(() => {
    if (isLoading && faces.length === 0) {
      loadFaces();
    }
  }, [loadFaces, isLoading, faces]);

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
      const scrolledToBottom =
        Math.ceil(scrollTop + clientHeight) >= scrollHeight;

      if (scrolledToBottom && !isLoading && !isAllDataFetched) {
        setIsLoading(true);
        await loadFaces();
      }
    };
    window.addEventListener("scroll", loadOnScroll);
    return () => window.removeEventListener("scroll", loadOnScroll);
  }, [loadFaces, isLoading, isAllDataFetched]);

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
