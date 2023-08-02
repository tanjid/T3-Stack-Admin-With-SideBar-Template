import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const business = await prisma.business.create({
    data: {
      name: "RetailBD",
      address: "Dhaka",
      mobile: "01700000000",
      invoiceSlug: "R",
      image: "",
    },
  });
  const user = await prisma.user.upsert({
    where: { email: "alice@prisma.io" },
    update: {},
    create: {
      email: "b@b.com",
      name: "Alice",
      password: "bbbb",
      business: {
        connect: {
          id: business.id,
        },
      },
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
