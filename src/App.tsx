import Button from "./components/Button";
import Card from "./components/Card";
import StateSample from "./components/StateSample";

function App() {
  const uchidaTest = () => {
    return alert("打田だよ");
  };
  const matsudoTest = () => {
    return alert("松戸だよ");
  };
  const fukuiTest = () => {
    return alert("福井だよ");
  };

  return (
    <main>
      <div className="p-6 flex flex-col items-center">
        <h1 className="text-2xl font-bold pb-4">コンポーネントの作り方教材</h1>
        <div className="flex flex-col gap-2 pb-8">
          <Button label="うちだのボタンだよ" clickHandler={uchidaTest} />
          <Button label="まつどのボタンだよ" clickHandler={matsudoTest} />
          <Button label="ふくいのボタンだよ" clickHandler={fukuiTest} />
        </div>
        <div className="flex gap-4 pb-6">
          <Card
            imageURL="URLってことで"
            title="全部盛り"
            discription="ちょっと長めの説明とか入ってたらカッコ良さそーう"
            isButton
          />
          <Card imageURL="URLってことで" title="文章なし" isButton />
          <Card
            imageURL="URLってことで"
            title="ボタンなし"
            discription="ちょっと長めの説明とか入ってたらカッコ良さそーう"
          />
          <Card imageURL="URLってことで" title="なんもなし" />
        </div>
        <div>
          <StateSample />
        </div>
      </div>
    </main>
  );
}

export default App;
