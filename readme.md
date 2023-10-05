day9 : context;

1 : vấn đề state ?

- truyền props qua quá nhiều components
- props truyền qua grandParent,-> parent -> child

2 : context là gì ?

- sẽ giải quyết vấn đề (1)
- global state : warehouse ,component nào cần vào lấy

3 : cách dùng

- <>
  <ComponentA />

  <AppContext.Provider>
  <div>
  App
  <GrandParent />
  </div>
  </AppContext.Provider>
  </>

  ComponentA không sử dụng context

- tạo context : createContext
- dùng context : useContext

4 : ví dụ

web -> theme : 'dark" | light

5 : lời khuyên :

- k quá lạm dụng
