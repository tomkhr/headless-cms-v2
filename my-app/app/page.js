import Image from "next/image";
import styles from "./globals.css";

import Typography from '@mui/material/Typography';
import SiteHeader from "@/components/SiteHeader";
import ProjectThumbnail from "@/components/ProjectThumbnail";

export default function Home() {
  return (
    <div>
      <Typography variant="h1" gutterBottom>
        Testing Material UI
      </Typography>
      
      <SiteHeader />
      <ProjectThumbnail />
    </div>
  );
}
