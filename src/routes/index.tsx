import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Welcome to Cheddyshop</Title>
      <h1>Welcome to Cheddyshop!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="" target="_blank">
          start.solidjs.com
        </a>{" "}

      </p>
    </main>
  );
}
