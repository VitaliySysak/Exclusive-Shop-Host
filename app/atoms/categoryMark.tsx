interface CategoryMarkProps {
  categoryName: string;
}

export default function CategoryMark({ categoryName }: CategoryMarkProps) {
  return (
    <div className="flex flex-row items-center h-[40px] gap-x-2">
      <div className="w-[20px] h-full bg-[#DB4444] rounded-[4px]"></div>
      <span className="text-[16px] text-[#DB4444] font-bold">{categoryName}</span>
    </div>
  );
}
