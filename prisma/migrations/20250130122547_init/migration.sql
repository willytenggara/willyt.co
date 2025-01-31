-- CreateTable
CREATE TABLE "BlogView" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "views" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "BlogView_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BlogView_slug_key" ON "BlogView"("slug");
