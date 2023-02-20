import request from "./request";

export const getTopBanner = () => {
  return request.get("/banner");
};
export function getHotRecommends(limit) {
  return request({
    url: "/personalized",
    params: {
      limit,
    },
  });
}

export function getNewAlbums(limit) {
  return request({
    url: "/top/album",
    params: {
      limit,
      area:7
    },
  });
}

export function getTopList(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id,
    },
  });
}
export function getSettleSingerList(limit) {
  return request({
    url: "/artist/list",
    params: {
      limit,
    },
  });
}
