Rails.application.routes.draw do
  devise_for :users
  root to: 'english_words#index'
  resources :english_words,except: :index do
    collection do
        get :quiz #quizアクションを追加
    end
  resources :users
  end
end
