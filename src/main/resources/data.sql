INSERT INTO products (name, sku, category, uom) VALUES
('Steel Rod', 'SKU-001', 'COSMETICS', 'kg'),
('Wooden Chair', 'SKU-002', 'COSMETICS', 'pcs'),
('Cardboard Box', 'SKU-003', 'COSMETICS', 'pcs')
ON CONFLICT (sku) DO NOTHING;