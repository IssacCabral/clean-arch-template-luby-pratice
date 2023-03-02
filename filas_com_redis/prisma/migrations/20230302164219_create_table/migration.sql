-- CreateTable
CREATE TABLE "Count" (
    "id" TEXT NOT NULL,
    "sum" INTEGER NOT NULL,

    CONSTRAINT "Count_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Count_id_key" ON "Count"("id");
