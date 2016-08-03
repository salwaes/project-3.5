class CreateBuckets < ActiveRecord::Migration[5.0]
  def change
    create_table :buckets do |t|
      t.string :country
      t.string :region
      t.string :capital

      t.timestamps
    end
  end
end
