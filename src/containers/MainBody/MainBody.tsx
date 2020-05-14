import React, { useEffect, useState, useCallback } from "react";

import Face from "types/Face";
import { host, requestOptions } from "utils/constants";
import { Settings, Wrapper } from "./styles";
import ListItem from "components/ListItem";

type sortBy = "id" | "price" | "size";

const MainBody = () => {
  const [sortBy, setSortBy] = useState<sortBy>("id");
  const [page, setPage] = useState<number>(1);
  const [faces, setFaces] = useState<Face[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadFaces = async () => {
    const productsURL = `${host}products?_sort=${sortBy}&_page=${page}&_limit=15`;
    const response = await fetch(productsURL, requestOptions);
    const newFaces: Face[] = await response.json();
    setFaces([...faces, ...newFaces]);
    setPage(page + 1);
    setIsLoading(false);
  };
  const loadFacesCallback = useCallback(loadFaces, []);

  useEffect(() => {
    loadFacesCallback();
  }, [loadFacesCallback]);

  return (
    <Wrapper>
      <Settings>
        <span>Sort By</span>
        <span>Showing {faces.length} results</span>
      </Settings>
      <ListItem faces={faces} />
    </Wrapper>
  );
};

export default MainBody;
