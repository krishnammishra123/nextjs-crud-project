'use client'
import AddTask from "@/component/AddTask/AddTask";
import Loading from "@/component/Loading/loading";
import TaskList from "@/component/TaskList/TaskList";
import axios from "axios";
import { useEffect, useState } from "react";
 

export default function Home() {
  const [userDetail, setUserDetails] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   

useEffect(() => {
  const getData = async() => {
    try {
      const res = await axios.get("/api/getdata");
      setUserDetails(res.data.details);
        setIsLoading(false);
    } catch (err) {
      console.log(err);
        setIsLoading(false);
    }
  };
  getData();
}, []);
 

  return (
    <main className="flex flex-col justify-center items-center max-w-6xl m-auto px-4 sm:px-6 lg:px-8">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h1 className="text-center font-bold text-2xl my-4">
            Welcome to the Add Card Page
          </h1>
          <AddTask setUserDetails={setUserDetails} />
          <TaskList userDetail={userDetail} setUserDetails={setUserDetails} />
        </>
      )}
    </main>
  );
}
