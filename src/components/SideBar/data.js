import React from "react";
// import { images } from "../../img/images";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

export const navigation = [
  {
    id: 0,
    name: "Página Inicial",
    icon: <HomeOutlinedIcon id="Home"/>,
  },
  {
    id: 1,
    name: "Pesquisa",
    icon: <SearchIcon />,
  },
  {
    id: 2,
    name: "Explorar",
    icon: <ExploreOutlinedIcon />,
  },
  {
    id: 3,
    name: "Reels",
    icon: <MovieOutlinedIcon />,
  },
  {
    id: 4,
    name: "Mensagens",
    icon: <MessageOutlinedIcon />,
  },
  {
    id: 5,
    name: "Notificações",
    icon: <FavoriteBorderOutlinedIcon />,
  },
  {
    id: 6,
    name: "Criar",
    icon: <AddBoxOutlinedIcon />,
  },
  {
    id: 7,
    name: "Perfil",
    // img: images[0].url,
  },
];
