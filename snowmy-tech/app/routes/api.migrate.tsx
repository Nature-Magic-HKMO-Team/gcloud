import { ActionFunctionArgs, LoaderFunctionArgs, json } from "@react-router/node";
import { authenticate } from "@shopify/shopify-app-react-router";

// The loader function will handle GET requests and is where we'll fetch data.
export async function loader({ request }: LoaderFunctionArgs) {
  const { admin } = await authenticate.admin(request);

  // For now, we'll just return a success message.
  // In the next step, we'll add the GraphQL query to fetch products and metaobjects.
  return json({ message: "Data fetching endpoint is ready." });
}

// The action function will handle POST requests and is where we'll write data.
export async function action({ request }: ActionFunctionArgs) {
  const { admin } = await authenticate.admin(request);

  // For now, we'll just return a success message.
  // In a later step, we'll add the GraphQL mutation to write the transformed data.
  return json({ message: "Data writing endpoint is ready." });
}
