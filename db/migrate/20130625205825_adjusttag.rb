class Adjusttag < ActiveRecord::Migration

  def up
    add_column :tags, :photo_id, :integer
    add_column :tags, :friend_id, :integer
    add_column :tags, :xco, :integer
    add_column :tags, :yco, :integer
    remove_column :tags, :title
  end

  def down
    add_column :tags, :title, :string
  end
end
