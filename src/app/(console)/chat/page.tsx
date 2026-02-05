import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export default function ChatPage() {
  return (
    <>
      <PageHeader>
        <PageHeaderTitle>Chat</PageHeaderTitle>
        <PageHeaderDescription>Converse com seus documentos utilizando a IA.</PageHeaderDescription>
      </PageHeader>
      <div className="p-8 text-center border-2 border-dashed rounded-lg">
          <p className="text-muted-foreground">Interface de Chat em construção.</p>
      </div>
    </>
  );
}
