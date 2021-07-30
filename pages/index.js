import { createClient } from "contentful";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Hero from "../comps/Hero";
import CenterCom from "../comps/CenterCom";
import WorkoutCard from "../comps/WorkoutCard";
import Cooking from "../comps/Cooking";
import CookingTwo from "../comps/CookingTwo";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  });
  const res = await client.getEntries({ content_type: "workouts" });
  return {
    props: {
      workouts: res.items
    }
  };
}
export default function Home({ workouts }) {
  console.log(workouts);
  return (
    <>
      <div>
        <Hero />
        <CenterCom />
        <h1 className={styles.title}>
          Find out more about these workouts below:
        </h1>
        {/*the workout component */}
        <div className="workouts-list">
          {workouts.map(workouts => (
            <WorkoutCard key={workouts.sys.id} workouts={workouts} />
          ))}
          <style jsx>
            {`
              .workouts-list {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 20px; 60px;
              }
            `}
          </style>
        </div>
        {/*the workout component */}
      </div>
    </>
  );
}
