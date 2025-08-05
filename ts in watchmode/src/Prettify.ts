type ComplexType = {
  username: string;
  password: string;
};

type preferences = {
  hobby: string;
  motion: string;
};
type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

type NewPrettify = Prettify<ComplexType & preferences>;

//IIMT
type Values = preferences[keyof preferences];
type ActionAsDiscoUnion<T> = {
  [K in keyof T]: Prettify<
    {
      type: K;
    } & T
  >;
}[keyof T]

type newType = ActionAsDiscoUnion<preferences>
