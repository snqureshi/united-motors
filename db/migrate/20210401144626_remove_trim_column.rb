class RemoveTrimColumn < ActiveRecord::Migration[6.1]
  def change
    remove_column :models, :trim
  end
end
