Rails.application.routes.draw do
  root to: 'english_words#index'
  resources :english_words,except: :index do
    collection do
        get :quiz #quizアクションを追加
    end
  end
end
