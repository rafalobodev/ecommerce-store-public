import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
    const products = await getProducts({ isFeatured: true });//produtos q nao estao ocultos por acabar estoque
    const billboard = await getBillboard("f1cb8813-906f-45f0-8742-83197bfac349");//id do billboard pego no admin do projeto
    return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard 
          data={billboard}
        />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Produtos em Destaque" items={products} />
        </div>
      </div>
    </Container>
    );
}

export default HomePage;