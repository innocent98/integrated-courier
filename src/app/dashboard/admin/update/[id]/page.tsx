import { UpdateContainer } from "../container/UpdateContainer";

const Update = ({
  params,
}: {
  params: React.ComponentProps<typeof UpdateContainer>;
}) => {
  return <UpdateContainer {...params} />;
};

export default Update;
