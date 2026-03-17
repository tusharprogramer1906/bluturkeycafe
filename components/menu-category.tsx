interface MenuItem {
  name: string;
  description: string;
  price: string;
  badge?: string;
  vegan?: boolean;
  veg?: boolean;
}

interface MenuCategoryProps {
  category: string;
  description?: string;
  items: MenuItem[];
  showVegIndicator?: boolean;
}

function getSectionId(category: string): string {
  return category.toLowerCase().replace(/\s+/g, '-').replace(/[()&]/g, '');
}

function isItemVeg(item: MenuItem): boolean {
  if (item.veg !== undefined) return item.veg;
  if (item.vegan) return true;
  const name = item.name.toLowerCase();
  return !(name.includes('chicken') || name.includes('non-veg') || name.includes('bbq'));
}

export default function MenuCategory({
  category,
  description,
  items,
  showVegIndicator = false,
}: MenuCategoryProps) {
  const sectionId = getSectionId(category);

  return (
    <div className="mb-12 scroll-mt-24 md:scroll-mt-28" id={sectionId}>
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
        {items.map((item, index) => {
          const veg = isItemVeg(item);
          return (
            <div
              key={index}
              className="flex justify-between items-start gap-4 p-4 md:p-4 rounded-lg hover:bg-accent/5 transition-colors border border-border/50 min-h-[72px] md:min-h-0"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  {showVegIndicator && (
                    <span
                      className={`inline-flex w-5 h-5 rounded-full flex-shrink-0 ${
                        veg ? 'bg-green-600' : 'bg-red-600'
                      }`}
                      aria-label={veg ? 'Vegetarian' : 'Non-vegetarian'}
                      title={veg ? 'Veg' : 'Non-Veg'}
                    />
                  )}
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
          );
        })}
      </div>
    </div>
  );
}
