import type { Metadata } from "next";
import { connection } from "next/server";
import { ProductForm } from "@/components/admin/product-form";
import { categoryRepository } from "@/infrastructure/categories/category-repository";
import { container } from "@/infrastructure/di/container";

export const instant = false;

export const metadata: Metadata = {
  title: "Create Product · Nivi Admin",
  robots: { index: false, follow: false },
};

export default async function NewProductPage() {
  await connection();
  const [categories, vendors, session] = await Promise.all([
    categoryRepository.list(),
    container.getVendors(),
    container.adminAuth.getCurrentSession(),
  ]);

  const isManager = session?.role === "manager" || Boolean(session?.hideZohoBooks);

  return (
    <div className="py-2">
      <ProductForm
        key={crypto.randomUUID()}
        isEditing={false}
        availableCategories={categories}
        availableVendors={vendors}
        hideCostPriceAndVendor={isManager}
      />
    </div>
  );
}
