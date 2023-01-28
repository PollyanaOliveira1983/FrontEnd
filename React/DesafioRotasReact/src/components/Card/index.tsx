import "./styles.css";

type Props = {
  title: string;
};

export default function Card({ title }: Props) {
  return <h2>{title}</h2>;
}
