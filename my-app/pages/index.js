import Image from "next/image";
import styles from "./globals.css";

import Typography from '@mui/material/Typography';
import SiteHeader from "@/components/SiteHeader";
import ProjectThumbnail from "@/components/ProjectThumbnail";
import DataFetcher from "@/components/DataFetcher";

export default function Home() {
  return (
    <div>
              <h1>Hello World!</h1>
      {/* <Typography variant="h1" gutterBottom>
        Testing Material UI
      </Typography> */}
      
      <SiteHeader />
      {/* <ProjectThumbnail /> */}
        <DataFetcher />
    </div>
  );
}
