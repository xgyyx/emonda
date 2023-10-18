import { 
  SandpackProvider, 
  SandpackLayout, 
  SandpackPreview, 
  SandpackCodeEditor,
  useSandpack
} from "@codesandbox/sandpack-react";

const CustomSandpack = () => {
  return (
    <SandpackProvider template="react">
      <SandpackLayout>
        <SandpackCodeEditor />
        <SandpackPreview />
      </SandpackLayout>
    </SandpackProvider>
  )
};

export default CustomSandpack