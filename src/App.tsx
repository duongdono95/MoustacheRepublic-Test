import { useQuery } from "@tanstack/react-query";
import "./App.scss";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import axios from "axios";
import { toast } from "react-toastify";
import PageContent from "./components/PageContent/PageContent";
import FalloverPage from "./components/FalloverPage";

function App() {
  const { data, isLoading } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const response = await axios.get(
        "https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product"
      );
      if (response.status === 200) {
        return response.data;
      } else {
        toast.error("Failed to fetch data");
      }
    },
  });
  return (
    <div>
      <Navbar />
      <Layout>
        <div className="page-content-wrapper">
          {data ? (
            <PageContent data={data} />
          ) : (
            <FalloverPage isLoading={isLoading} />
          )}
        </div>
      </Layout>
    </div>
  );
}

export default App;
