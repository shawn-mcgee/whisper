---
title: Whisper Reference
description: A reference describing language syntax and features.
---

### Primitive Types

Whisper supports the following primitive types -

**Signed Integers**
- `i8` 8-bit signed integer
- `i16` 16-bit signed integer
- `i32` 32-bit signed integer
- `i64` 64-bit signed integer

**Unsigned Integers**
- `u8` 8-bit unsigned integer
- `u16` 16-bit unsigned integer
- `u32` 32-bit unsigned integer
- `u64` 64-bit unsigned integer

**Floating Point**
- `f32` 32-bit floating point number
- `f64` 64-bit floating point number

**Strings**
- `utf8`  UTF-8 encoded string
- `utf16` UTF-16 encoded string
- `utf32` UTF-32 encoded string

**Booleans**
- `bool` Boolean

**Composites**
- `composite`

### Integer Literals

**Default Base & Base Prefixes**

By default Whisper assumes all integer literals are written using base-10 notation; however, the language supports the following prefixes to indicate the base of integer literals -

- `0x` or `0X` for hexadecimal
- `0d` or `0D` for decimal
- `0o` or `0O` for octal
- `0b` or `0B` for binary

**Default Type & Type Suffixes**

By default Whisper assumes all integer literals are `i64`; however, the language supports the following suffixes to hint at the type of integer literals -

**Signed Integer Suffixes**
- `i8` hint for 8-bit signed integer
- `i16` hint for 16-bit signed integer
- `i32` or `i` hint for 32-bit signed integer
- `i64` or `I` hint for 64-bit signed integer

**Unsigned Integer Suffixes**
- `u8` hint for 8-bit unsigned integer
- `u16` hint for 16-bit unsigned integer
- `u32` or `u` hint for 32-bit unsigned integer
- `u64` or `U` hint for 64-bit unsigned integer

**Example Signed Integer Literals**

```w
  signed_byte  := 0xFFi8  #  8-bit signed integer using hexadecimal notation
  signed_short := 0d99i16 # 16-bit signed integer using decimal notation
  signed_int   := 0o77i32 # 32-bit signed integer using octal notation
  signed_long  := 0b11i64 # 64-bit signed integer using binary notation

  also_signed_int  := 42i # 32-bit signed integer using i32 shorthand
  also_signed_long := 42I # 64-bit signed integer using i64 shorthand

  default_signed_long := 0 # 64-bit signed integer
```

**Example Unsigned Integer Literals**

```w
  unsigned_byte  := 0xFFu8  #  8-bit unsigned integer using hexadecimal notation
  unsigned_short := 0d99u16 # 16-bit unsigned integer using decimal notation
  unsigned_int   := 0o77u32 # 32-bit unsigned integer using octal notation
  unsigned_long  := 0b11u64 # 64-bit unsigned integer using binary notation

  also_unsigned_int  := 42u # 32-bit unsigned integer using u32 shorthand
  also_unsigned_long := 42U # 64-bit unsigned integer using u64 shorthand
```

### Floating Point Literals

**Default Type & Type Suffixes**

By default Whisper assumes all floating point literals are `f64`; however, the language supports the following suffixes to hint at the type of floating point literals -

- `f32` hint for 32-bit floating point
- `f64` hint for 64-bit floating point

**Example Floating Point Literals**

```w
  float32 := 42f32 # 32-bit floating point
  float64 := 69f64 # 64-bit floating point

  also_float32 := 3.14f # 32-bit floating point using f32 shorthand
  also_float64 := 3.14F # 64-bit floating point using f64 shorthand

  default_float64 := 0.0 # 64-bit floating point
```

### String Literals

**Quotes & Escape Sequences**

String literals can use either single or double quotes to delimit the string. Special characters can be escaped using the backslash character followed by the corresponding escape sequence -

```w
  \n  newline
  \r  carriage return
  \t  tab
  \b  backspace
  \"  double quote (only inside of double quoted strings)
  \'  single quote (only inside of single quoted strings)
  \\  backslash
  ...
```

Note that double quotes do not need to be escaped inside of a single quoted string and vice versa.

**Default Type & Type Suffixes**

By default Whisper assumes all string literals are `utf8`; however, the language supports the following suffixes to hint at the type of string literals -

**Example String Literals**

```w
  utf8_string  := "Hello, world!"utf8  # UTF-8 encoded string
  utf16_string := 'Hello, world!'utf16 # UTF-16 encoded string
  utf32_string := "Hello, world!"utf32 # UTF-32 encoded string

  default_utf8_string := 'Hello, world!' # UTF-8 encoded string
```

### Boolean Literals

**Keywords**

Whisper supports the following boolean literals as keywords (internally booleans are `u8` values) -

- `true`  Not zero (canonical internal representation is `1`)
- `false`     Zero (canonical internal representation is `0`)

### Variable Declaration & Assignment

**Declaration with Implicit Type**

Whisper uses the `:=` operator when declaring a variable. When no type is provided, the type of the variable is inferred from the value assigned to it.

```w
  x := 10 # default integer literal is i64
```

**Declaration with Explicit Type**

The `:=` operator can optionally contain a type constraint which is used by the compiler to check the value assigned to the variable. In some cases, the compiler can coerce the type of a literal to match the type of the variable.

```w
  x: i32 = 10 # default integer literal is i64, but the explicit type overrides this behavior
```

> [!note] A Note on `nil`
> 
> Whisper does not include a `nil` type and Whisper does not automatically zero memory when declaring a variable. As a result, a variable must always have a value when it is declared.

**Mutability**

By default, all variables are immutable. The `mut` keyword can be used to declare a mutable variable.

```w
  mut x := 10 # mutable i64
```

**Assignment**

The `=` operator is used to assign a value to a *mutable* variable.

```w
  mut x := 10
  x = 20 # x is now 20
```

### Composites

A composite is a compound data structure with a set of named fields.

**Defining a Composite**

A composite can be defined using the `type` keyword, followed by a unique name and a composite body.

```w
  type Point { } # an empty composite
```

**Composite Fields**

Composite fields are defined by their name and type (optional if default value is present), optionally followed by a default value.

```w
  type Point {
    x: i32 = 0,
    y: i32 = 0
  } # a composite with two fields
```

**Composite Methods**

Composite methods are special functions that can be called on a composite instance. A composite method is defined by a function signature, followed by a function body.

```w
  type Point {
    x: i32 = 0,
    y: i32 = 0,

    fn add(self, other: Point) {
      self.x += other.x
      self.y += other.y
    }
  } # a composite with a method
```

**Typed Composite Literals**

Typed composite literals are used to create instances of a composite type. A typed composite literal includes the name of the composite type and *must* declare a value for any ambiguous (non-default) fields. A typed composite literal can optionally declare values for default fields.

```w
  p := Point { x := 10 }
```

**Untyped Composite Literals**

Untyped composite literals are used to create instances of a composite type. The type can be inferred from the composite fields, or an explicit type can be used to provide a lower bound on the declaration. An untyped composite literal *must* declare a value for *all* fields.

```w
  type Point {
    x: i32 = 0,
    y: i32 = 0,
  }

  p: Point = {
    x := 10,
    y := 20
  } # untyped composite literal with Point as lower bound
```

**Composite Constructors**

Composite constructors are special functions that can be called to create instances of composites. Similar to a typed composite literal, a composite constructor *must* declare a value for any ambiguous (non-default) fields. A composite constructor can optionally declare values for default fields.

```w
  type Point {
    x: i32 = 0,
    y: i32 = 0,

    (self) {
      # default constructor, values are already 0, 0
    },

    (self, x: i32, y: i32) {
      # constructor with explicit initialization
      self.x = x
      self.y = y
    }
  }

  p := Point(10, 20) # calls the constructor with matching signature
```

**Composition**

Composition is used to derive a composite type from one or more other composite types. A composition is defined like a typical composite, but it includes the `with` keyword followed by a comma-separated list of composite types.

```w
  type HasId {
    id: utf8,
  }

  type HasAge {
    age: i32,
  }

  type HasName {
    name: utf8,
  }

  type Person with HasId, HasAge, HasName {
    (id: utf8, age: i32, name: utf8) {
      self.id = id
      self.age = age
      self.name = name
    }
  }
```

### Types

**Aliases**

A type alias can be used to name a primitive or compound type expression.

```w
  type byte = u8
```

**Unions**

A union is a compound type expression that represents one of several possible types. Unions are declared using the union `|` operator between types.

```w
  type int = i8 | i16 | i32 | i64
```

**Intersections**

An intersection is a compound type that satisfies several composite types. Intersections are declared between using the intersection `&` operator between composite type expressions.

A valid intersection -
- consists of two or more composite types
- has no field collisions between types (meaning shared field names must be of the same type)
- has no unresolved method collisions between types (meaning shared methods must each have a unique signature, or a default implementation is provided)

```w
  type Point2D {
    x: i32 = 0,
    y: i32 = 0
  }

  type Point3D {
    z: i32 = 0
  }

  type Point = Point2D & Point3D
```

### References

By default, all variables are declared on the stack. The `ref` keyword can be used to declare a variable on the heap. The `ref` keyword can also be used in type expressions to define a heap-only type.

```w  
  ref type Node {
    next: ref Node,
    prev: ref Node,
    value: i32,

    (self, value: i32) {
      self.next = self
      self.prev = self
      self.value = value
    }
  }

  type List {
    head: ref Node,
    tail: ref Node,

    () {
      node := ref Node(0)
      self.head = node
      self.tail = node
    }
  }

  list := List()
```





