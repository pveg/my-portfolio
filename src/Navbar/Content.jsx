import { Text, Spacer } from "@nextui-org/react"
import { Box } from "./Box.jsx"

export const Content = () => (
  <Box css={{px: "$12", mt: "$8", "@xsMax": {px: "$10"}}}>
    <Text className="text-center" h2>Technology</Text>
    <Spacer y={1} />
  </Box>
);
