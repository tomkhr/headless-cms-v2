ReadMe - Headless CMS V2


Assignment: Integrating a Headless CMS
Student Name: Tom Khrustalev
Course: Web Appliacations Development - CPRG-310-A (Winter 2025)


Steps it took to integrate the headless CMS into my project.

1.  First, I had to install Sanity CMS project in the root folder of my project, which created a folder for my Sanity project alongside my Next JS folder.

2.  Then I had to create an account with Sanity, log into my Sanity Studio. At the same time, I had to create a new file in my schemaTypes folder of my sanity project per each individual schema type (at this point i only have one schema type) where i had to specify each field, it's data type, and any rules. Then checked in my Sanity Studio to see that i have a new schema type where i could create records.

3.  Then, I had to populate the schema type with acutall content. I created four items in my CMS, each has a title, a paragraph, a photo URL, and a date.

4.  Now I got to wiritng the code. It took quite a bit of researching to understand how the code is structured. I had to create a component names DataFetcher.js (took this name from an online tutorial I came across, ideally should rename it to something else). the code consists of useState to store the data, and useEffect with an async function to run the fetching call. If loading, the loading div shows up, otherwise return the block of code that represents the project thumbnail where the image (which was added later in the build, with img url builder), heading, paragraph, and date are mapped to as many records as there are in the schema type.

5.  After a fair amount of strugle, debugging, finally the data was fetching. The simplest point that i could not get past for a while was realizing that the data wasn't fetching because I did not add my localhost:3000 as a permission for my CORS origins in my Sanity project configuraton. Then, I styles the componenets a bit more, and made the header and the thumbnail component derive their styles from the globals.css file, rather than using inline style code. Finally, I realized that my data in Sanity was public and I was not using an API token, so I had to generage a token, and reconfigure the code for it to fetch from a secure API while keeping my API token invisible in the public files of my code by adding the end.local to my got.ignore.

6.  Finally, deplying was a bit of a struggle too. First time deplying with Vercel, and still the lack of experience with NEXT, I realized that my routing was using my /app/page.js as my homepage, because i did not have a pages folder with an index.js in it, which I completely forgot about in the early stages with how much other stuff needed to be done. So I created the index.js inside my /pages folder, but my already deplyed project on Vercel wouldn't work. Upon re-deploying it I realized also that i did not indicate the my-app (next) folder as the root folder for my Vercel deployment project. Once the deplyoment worked, I could only see my header component at first, but then added my vercel project url to the CORS origins in my Sanity app, and finally my Headless CMS project is up and running on Vercel with the data being successfuly fethed from Sanity using an API.


To run this application locally, you'd need:
    1.  Open Sanity Studio: Open the project folder in VS Code, open terminal, direct to "portfolio-1" folder ("cd portfolio-1"), and run "run npm dev" to get the Sanity Studio app running in your localhost:3333, where you can go to manage the content.

    2.  Open a new terminal window in VS Code, navigate to the my-app folder ("cd my-app"), and run the command "npm run dev" to run the next app in your localhost:3000. 

    Note: It's important that you next app runs on localhost:3000 specifically, as this port is configured as a CORS origin in the Sanity project. On any other port, the project would not work.


Denepndecies in this project:
    *  Create NEXT app
    *  Create Sanity app
    *  Sanity Client
    *  Sanity image URL builder


Retrospect: 
    This project has been a steep, but useful and rewarding learning curve. I feel like I was able to wrap my head around a lot of new stuff in the process and add clarity to some nuances on how some things work and depend on each other.


Thank you for reading!