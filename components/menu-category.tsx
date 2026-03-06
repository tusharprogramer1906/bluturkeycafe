interface MenuItem {
  name: string;
  description: string;
  price: string;
  badge?: string;
  vegan?: boolean;
}

interface MenuCategoryProps {
  category: string;
  description?: string;
  items: MenuItem[];
}

export default function MenuCategory({
  category,
  description,
  items,
}: MenuCategoryProps) {
  return (
    <div className="mb-12 scroll-mt-20" id={category.toLowerCase().replace(/\s+/g, '-')}>
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
          {category}
        </h3>
        {description && (
          <p className="text-foreground/70 text-sm md:text-base">
            {description}
          </p>
        )}
      </div>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-start gap-4 p-4 rounded-lg hover:bg-accent/5 transition-colors border border-border/50"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-semibold text-foreground text-lg">
                  {item.name}
                </h4>
                {item.vegan && (
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-semibold">
                    Vegan
                  </span>
                )}
                {item.badge && (
                  <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full font-semibold">
                    {item.badge}
                  </span>
                )}
              </div>
              <p className="text-foreground/70 text-sm">
                {item.description}
              </p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="font-bold text-primary text-lg">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
