export default function Badge({
  content,
  icon,
}: {
  content: string;
  icon: any;
}) {
  return (
    <div className="flex items-center gap-1 bg-gray-100 px-3 py-2 rounded-lg text-gray-600">
      {icon}
      <p className="text-[11px]">{content}</p>
    </div>
  );
}
