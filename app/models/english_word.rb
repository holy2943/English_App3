class EnglishWord < ApplicationRecord
  validates :key_word, presence: true #空データ保存を制限

  belongs_to :user
end
