class AddUserIdToEnglishWords < ActiveRecord::Migration[5.2]
  def change
    add_column :english_words, :user_id, :integer
  end
end
