-- DropIndex
DROP INDEX `addresses_lineTwo_key` ON `addresses`;

-- AlterTable
ALTER TABLE `addresses` MODIFY `lineTwo` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `defaultBillingAddress` INTEGER NULL,
    ADD COLUMN `defaultShippingAddress` INTEGER NULL;
