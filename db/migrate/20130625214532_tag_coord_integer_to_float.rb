class TagCoordIntegerToFloat < ActiveRecord::Migration
  def change
    remove_column :tags, :xco
    remove_column :tags, :yco
    add_column :tags, :xco, :float
    add_column :tags, :yco, :float
  end
end
