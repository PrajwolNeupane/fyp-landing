export default function Badge({
  content,
  icon,
}: {
  content: string;
  icon: any;
}) {
  return (
    <div className="flex items-center gap-1 bg-gray-100 sm:px-3 px-1.5 sm:py-2 py-1 rounded-lg text-gray-600">
      {icon}
      <p className="text-[11px]">{content}</p>
    </div>
  );
}
