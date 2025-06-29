export default function Result({ text }) {
  return (
    <div className="mt-6 p-4 border rounded bg-green-50">
      <h3 className="font-semibold mb-2">When you want to grow !</h3>
      <p>{text}</p>
    </div>
  );
}
