import { 
  SandpackProvider, 
  SandpackLayout, 
  SandpackPreview, 
  SandpackCodeEditor,
  SandpackFileExplorer,
} from "@codesandbox/sandpack-react";

const CustomSandpack = () => {
  return (
    <SandpackProvider template="react" theme={'dark'}>
      <SandpackLayout>
        <SandpackFileExplorer />
        <SandpackCodeEditor />
        <SandpackPreview />
      </SandpackLayout>
    </SandpackProvider>
  )
};

export default CustomSandpack