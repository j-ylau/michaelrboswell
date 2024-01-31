// components/HeroDividerThree.js
import React from "react";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import MapIcon from "@mui/icons-material/MapOutlined";
import DatabaseIcon from "@mui/icons-material/StorageOutlined";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooksOutlined";

const HeroDividerThree = () => {
  return (
    <section className="bg-gradient-to-r from-green-50 to-emerald-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Typography variant="h5" component="h2" className="text-lg leading-6 font-medium text-emerald-800" gutterBottom>
            CCAP Resources
          </Typography>
          <Typography variant="h3" component="h1" className="text-4xl tracking-tight font-extrabold text-emerald-900 sm:text-5xl md:text-6xl">
            Explore, Learn, Engage
          </Typography>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Card variant="outlined" className="transition hover:shadow-xl">
            <CardActionArea href="/database" className="flex flex-col h-full justify-between">
              <CardContent className="flex flex-col items-center p-6">
                <DatabaseIcon style={{ fontSize: "3em", color: "#34D399" }} />
                <Typography gutterBottom variant="h5" component="h2" className="mt-2 font-bold">
                  CCAP Database
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Access the extensive collection of climate action plans.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card variant="outlined" className="transition hover:shadow-xl">
            <CardActionArea href="/map" className="flex flex-col h-full justify-between">
              <CardContent className="flex flex-col items-center p-6">
                <MapIcon style={{ fontSize: "3em", color: "#34D399" }} />
                <Typography gutterBottom variant="h5" component="h2" className="mt-2 font-bold">
                  Interactive Map
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Visualize climate action across California.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card variant="outlined" className="transition hover:shadow-xl">
            <CardActionArea href="/library" className="flex flex-col h-full justify-between">
              <CardContent className="flex flex-col items-center p-6">
                <LibraryBooksIcon style={{ fontSize: "3em", color: "#34D399" }} />
                <Typography gutterBottom variant="h5" component="h2" className="mt-2 font-bold">
                  CCAP Library
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Browse through curated documents and resources.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroDividerThree;
