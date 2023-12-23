import ProjectDetailScreen from "@/screens/projectDetail";
import React from "react";

type PropsType = {
  params: { id: string };
};

const Page = ({ params }: PropsType) => {
  return <ProjectDetailScreen id={params.id} />;
};

export default Page;
