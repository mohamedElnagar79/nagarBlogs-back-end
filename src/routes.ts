import { ArticlesController } from "./controller/ArticlesController";

export const Routes = [
  {
    method: "get",
    route: "/articles",
    controller: ArticlesController,
    action: "all",
  },
  {
    method: "get",
    route: "/articles/:id",
    controller: ArticlesController,
    action: "one",
  },
  {
    method: "post",
    route: "/articles",
    controller: ArticlesController,
    action: "save",
  },
];
