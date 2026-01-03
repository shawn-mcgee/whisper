export type Index = {
  readonly idx: number;
  readonly row: number;
  readonly col: number;
}

export const Index = {
  new(
    idx: number = 0,
    row: number = 0,
    col: number = 0,
  ) {
    return {idx, row, col} satisfies Index;
  }
}

export type Range = {
  readonly from: Index;
  readonly to  : Index;
}

export const Range = {
  new(
    from: Index,
    to  : Index
  ) {
    return {from, to} satisfies Range;
  }
}

export namespace Token {
  // identifiers
  export type Id  = { where: Range, is: "id" , value: string }

  // grouping
  export type LParen      = { where: Range, is: "(" }
  export type RParen      = { where: Range, is: ")" }
  export type LBrack      = { where: Range, is: "[" }
  export type RBrack      = { where: Range, is: "]" }
  export type LBrace      = { where: Range, is: "{" }
  export type RBrace      = { where: Range, is: "}" }
  export type LAngle      = { where: Range, is: "<" }
  export type RAngle      = { where: Range, is: ">" }
  export type Equal       = { where: Range, is: "=" }
  export type Comma       = { where: Range, is: "," }
  export type Colon       = { where: Range, is: ":" }
  export type Semicolon   = { where: Range, is: ";" }
  export type Dot         = { where: Range, is: "." }
  export type Plus        = { where: Range, is: "+" }
  export type Minus       = { where: Range, is: "-" }
  export type Star        = { where: Range, is: "*" }
  export type Slash       = { where: Range, is: "/" }
  export type Percent     = { where: Range, is: "%" }

  export type StarStar    = { where: Range, is: "**" }
  export type SlashSlash  = { where: Range, is: "//" }
  export type DotDot      = { where: Range, is: ".." }
  export type LAngleAngle = { where: Range, is: "<<" }
  export type RAngleAngle = { where: Range, is: ">>" }
  export type LAngleEqual = { where: Range, is: "<=" }
  export type RAngleEqual = { where: Range, is: ">=" }

  // literals
  export type I8  = { where: Range, is: "i8" , value: string }
  export type I16 = { where: Range, is: "i16", value: string }
  export type I32 = { where: Range, is: "i32", value: string }
  export type I64 = { where: Range, is: "i64", value: string }

  export type U8  = { where: Range, is: "u8" , value: string }
  export type U16 = { where: Range, is: "u16", value: string }
  export type U32 = { where: Range, is: "u32", value: string }
  export type U64 = { where: Range, is: "u64", value: string }

  export type F32 = { where: Range, is: "f32", value: string }
  export type F64 = { where: Range, is: "f64", value: string }

  export type String = { where: Range, is: "string", value: string }

  // keywords
  export type If     = { where: Range, is: "if"     }
  export type Elif   = { where: Range, is: "elif"   }
  export type Else   = { where: Range, is: "else"   }
  export type Loop   = { where: Range, is: "loop"   }
  export type Each   = { where: Range, is: "each"   }
  export type Skip   = { where: Range, is: "skip"   }
  export type Break  = { where: Range, is: "break"  }
  export type Yield  = { where: Range, is: "yield"  }
  export type Return = { where: Range, is: "return" }
  export type Is     = { where: Range, is: "is"     }
  export type In     = { where: Range, is: "in"     }
  export type As     = { where: Range, is: "as"     }
  export type Mut    = { where: Range, is: "mut"    }
  export type Ref    = { where: Range, is: "ref"    }
  export type Not    = { where: Range, is: "not"    }
  export type And    = { where: Range, is: "and"    }
  export type Xor    = { where: Range, is: "xor"    }
  export type Or     = { where: Range, is: "or"     }
}

export const Token = {
  Id(where: Range, value: string) {
    return {where, is: "id", value} satisfies Token.Id;
  },

  LParen(where: Range) {
    return {where, is: "("} satisfies Token.LParen;
  },

  RParen(where: Range) {
    return {where, is: ")"} satisfies Token.RParen;
  },

  LBrack(where: Range) {
    return {where, is: "["} satisfies Token.LBrack;
  },

  RBrack(where: Range) {
    return {where, is: "]"} satisfies Token.RBrack;
  },

  LBrace(where: Range) {
    return {where, is: "{"} satisfies Token.LBrace;
  },

  RBrace(where: Range) {
    return {where, is: "}"} satisfies Token.RBrace;
  },

  LAngle(where: Range) {
    return {where, is: "<"} satisfies Token.LAngle;
  },

  RAngle(where: Range) {
    return {where, is: ">"} satisfies Token.RAngle;
  },

  Equal(where: Range) {
    return {where, is: "="} satisfies Token.Equal;
  },

  Comma(where: Range) {
    return {where, is: ","} satisfies Token.Comma;
  },

  Colon(where: Range) {
    return {where, is: ":"} satisfies Token.Colon;
  },

  Semicolon(where: Range) {
    return {where, is: ";"} satisfies Token.Semicolon;
  },

  Dot(where: Range) {
    return {where, is: "."} satisfies Token.Dot;
  },

  Plus(where: Range) {
    return {where, is: "+"} satisfies Token.Plus;
  },

  Minus(where: Range) {
    return {where, is: "-"} satisfies Token.Minus;
  },

  Star(where: Range) {
    return {where, is: "*"} satisfies Token.Star
  },

  Slash(where: Range) {
    return {where, is: "/"} satisfies Token.Slash;
  },

  Percent(where: Range) {
    return {where, is: "%"} satisfies Token.Percent;
  },

  StarStar(where: Range) {
    return {where, is: "**"} satisfies Token.StarStar;
  },

  SlashSlash(where: Range) {
    return {where, is: "//"} satisfies Token.SlashSlash;
  },

  DotDot(where: Range) {
    return {where, is: ".."} satisfies Token.DotDot
  },

  LAngleAngle(where: Range) {
    return {where, is: "<<"} satisfies Token.LAngleAngle;
  },

  RAngleAngle(where: Range) {
    return {where, is: ">>"} satisfies Token.RAngleAngle;
  },

  LAngleEqual(where: Range) {
    return {where, is: "<="} satisfies Token.LAngleEqual;
  },

  RAngleEqual(where: Range) {
    return {where, is: ">="} satisfies Token.RAngleEqual;
  },

  I8 (where: Range, value: string) {
    return {where, is: "i8", value} satisfies Token.I8;
  },

  I16(where: Range, value: string) {
    return {where, is: "i16", value} satisfies Token.I16;
  },
  
  I32(where: Range, value: string) {
    return {where, is: "i32", value} satisfies Token.I32;
  },
  
  I64(where: Range, value: string) {
    return {where, is: "i64", value} satisfies Token.I64;
  },
  
  U8 (where: Range, value: string) {
    return {where, is: "u8", value} satisfies Token.U8;
  },
  
  U16(where: Range, value: string) {
    return {where, is: "u16", value} satisfies Token.U16;
  },
  
  U32(where: Range, value: string) {
    return {where, is: "u32", value} satisfies Token.U32;
  },
  
  U64(where: Range, value: string) {
    return {where, is: "u64", value} satisfies Token.U64;
  },
  
  F32(where: Range, value: string) {
    return {where, is: "f32", value} satisfies Token.F32;
  },
  
  F64(where: Range, value: string) {
    return {where, is: "f64", value} satisfies Token.F64;
  },

  String(where: Range, value: string) {
    return {where, is: "string", value} satisfies Token.String;
  },

  If(where: Range) {
    return {where, is: "if"} satisfies Token.If;
  },

  Elif(where: Range) {
    return {where, is: "elif"} satisfies Token.Elif;
  },

  Else(where: Range) {
    return {where, is: "else"} satisfies Token.Else;
  },

  Loop(where: Range) {
    return {where, is: "loop"} satisfies Token.Loop;
  },

  Each(where: Range) {
    return {where, is: "each"} satisfies Token.Each;
  },

  Skip(where: Range) {
    return {where, is: "skip"} satisfies Token.Skip;
  },

  Break(where: Range) {
    return {where, is: "break"} satisfies Token.Break;
  },

  Yield(where: Range) {
    return {where, is: "yield"} satisfies Token.Yield;
  },

  Return(where: Range) {
    return {where, is: "return"} satisfies Token.Return;
  },

  Is(where: Range) {
    return {where, is: "is"} satisfies Token.Is;
  },

  In(where: Range) {
    return {where, is: "in"} satisfies Token.In;
  },

  As(where: Range) {
    return {where, is: "as"} satisfies Token.As;
  },

  Mut(where: Range) {
    return {where, is: "mut"} satisfies Token.Mut;
  },

  Ref(where: Range) {
    return {where, is: "ref"} satisfies Token.Ref;
  },

  Not(where: Range) {
    return {where, is: "not"} satisfies Token.Not;
  },

  And(where: Range) {
    return {where, is: "and"} satisfies Token.And;
  },

  Or(where: Range) {
    return {where, is: "or"} satisfies Token.Or;
  }
}

export function *lex(s: string) {
  let i = Index.new();

  function eof() {
    return i.idx >= s.length;
  }

  function peek(n=1) {
    return s.slice(i.idx, i.idx + n);
  }

  function read(n=1) {
    let buffer = "";

    for (let _ = 0; _ < n; _++) {
      const c = s.charAt(i.idx);
      let {idx, row, col}  =  i;
      
      idx += 1;
      if (c === "\n") {
        row += 1;
        col  = 0;
      } else {
        col += 1;
      }
      i = Index.new(idx, row, col);

      buffer += c;
    }

    return buffer;
  }

  function match(c: string) {
    if (peek(c.length) === c) {
      read(c.length); 
      return true   ;
    } else {
      return false  ;
    }
  }


  function isDot(c: string) {
    return c === ".";
  }

  function isLower(c: string) {
    return "a" <= c && c <= "z";
  }

  function isUpper(c: string) {
    return "A" <= c && c <= "Z";
  }

  function isDigit(c: string) {
    return "0" <= c && c <= "9";
  }

  function isHexDigit(c: string) {
    return "0" <= c && c <= "9" ||
           "a" <= c && c <= "f" ||
           "A" <= c && c <= "F";
  }

  function isDecDigit(c: string) {
    return "0" <= c && c <= "9";
  }

  function isOctDigit(c: string) {
    return "0" <= c && c <= "7";
  }

  function isBinDigit(c: string) {
    return "0" <= c && c <= "1";
  }

  function isAlpha(c: string) {
    return isLower(c) || isUpper(c);
  }

  function isUnder(c: string) {
    return c === "_";
  }

  function isQuote(c: string) {
    return (
      c === "'" ||
      c === '"'
    )
  }

  function isSpace(c: string) {
    return (
      c === " "  ||
      c === "\t" ||
      c === "\n" ||
      c === "\r"
    )
  }

  function skipSpace() {
    while (!eof() && isSpace(peek())) 
      read();
  }

  function readString(from: Index) {
    const q = read();

    let buffer = "";
    while (!eof() && read() !== q) {
      buffer += read();
    }

    if (eof())
      throw `[readString] Unexpected end of file at ${i.row}:${i.col}`;
    read();

    return Token.String(Range.new(from, i), buffer);
  }

  function readHex(from: Index) {
    let buffer = "";
    while (!eof() && isHexDigit(peek()))
      buffer += read();

         if (match("i8" )              ) return Token.I8  (Range.new(from, i), buffer);
    else if (match("i16")              ) return Token.I16 (Range.new(from, i), buffer);
    else if (match("i32") || match("i")) return Token.I32 (Range.new(from, i), buffer);
    else if (match("i64") || match("I")) return Token.I64 (Range.new(from, i), buffer);
    else if (match("u8" )              ) return Token.U8  (Range.new(from, i), buffer);
    else if (match("u16")              ) return Token.U16 (Range.new(from, i), buffer);
    else if (match("u32") || match("u")) return Token.U32 (Range.new(from, i), buffer);
    else if (match("u64") || match("U")) return Token.U64 (Range.new(from, i), buffer);
    else                                 return Token.I64 (Range.new(from, i), buffer);
  }

  function readDec(from: Index) {
    let buffer = "";
    while (!eof() && isDecDigit(peek()))
      buffer += read();

         if (match("i8" )              ) return Token.I8  (Range.new(from, i), buffer);
    else if (match("i16")              ) return Token.I16 (Range.new(from, i), buffer);
    else if (match("i32") || match("i")) return Token.I32 (Range.new(from, i), buffer);
    else if (match("i64") || match("I")) return Token.I64 (Range.new(from, i), buffer);
    else if (match("u8" )              ) return Token.U8  (Range.new(from, i), buffer);
    else if (match("u16")              ) return Token.U16 (Range.new(from, i), buffer);
    else if (match("u32") || match("u")) return Token.U32 (Range.new(from, i), buffer);
    else if (match("u64") || match("U")) return Token.U64 (Range.new(from, i), buffer);
    else                                 return Token.I64 (Range.new(from, i), buffer);
  }

  function readOct(from: Index) {
    let buffer = "";
    while (!eof() && isOctDigit(peek()))
      buffer += read();

         if (match("i8" )              ) return Token.I8  (Range.new(from, i), buffer);
    else if (match("i16")              ) return Token.I16 (Range.new(from, i), buffer);
    else if (match("i32") || match("i")) return Token.I32 (Range.new(from, i), buffer);
    else if (match("i64") || match("I")) return Token.I64 (Range.new(from, i), buffer);
    else if (match("u8" )              ) return Token.U8  (Range.new(from, i), buffer);
    else if (match("u16")              ) return Token.U16 (Range.new(from, i), buffer);
    else if (match("u32") || match("u")) return Token.U32 (Range.new(from, i), buffer);
    else if (match("u64") || match("U")) return Token.U64 (Range.new(from, i), buffer);
    else                                 return Token.I64 (Range.new(from, i), buffer);
  }

  function readBin(from: Index) {
    let buffer = "";
    while (!eof() && isBinDigit(peek()))
      buffer += read();

         if (match("i8" )              ) return Token.I8  (Range.new(from, i), buffer);
    else if (match("i16")              ) return Token.I16 (Range.new(from, i), buffer);
    else if (match("i32") || match("i")) return Token.I32 (Range.new(from, i), buffer);
    else if (match("i64") || match("I")) return Token.I64 (Range.new(from, i), buffer);
    else if (match("u8" )              ) return Token.U8  (Range.new(from, i), buffer);
    else if (match("u16")              ) return Token.U16 (Range.new(from, i), buffer);
    else if (match("u32") || match("u")) return Token.U32 (Range.new(from, i), buffer);
    else if (match("u64") || match("U")) return Token.U64 (Range.new(from, i), buffer);
    else                                 return Token.I64 (Range.new(from, i), buffer);
  }

  function readNumber(from: Index) {
    // check for integer prefix
         if (match("0x") || match("0X"))
      return readHex(from);
    else if (match("0d") || match("0D"))
      return readDec(from);
    else if (match("0o") || match("0O"))
      return readOct(from);
    else if (match("0b") || match("0B"))
      return readBin(from);

    // consume digits
    let buffer = "";
    while (!eof() && isDigit(peek()))
      buffer += read();

    // check for integer suffix
         if (match("i8" )              ) return Token.I8  (Range.new(from, i), buffer);
    else if (match("i16")              ) return Token.I16 (Range.new(from, i), buffer);
    else if (match("i32") || match("i")) return Token.I32 (Range.new(from, i), buffer);
    else if (match("i64") || match("I")) return Token.I64 (Range.new(from, i), buffer);
    else if (match("u8" )              ) return Token.U8  (Range.new(from, i), buffer);
    else if (match("u16")              ) return Token.U16 (Range.new(from, i), buffer);
    else if (match("u32") || match("u")) return Token.U32 (Range.new(from, i), buffer);
    else if (match("u64") || match("U")) return Token.U64 (Range.new(from, i), buffer);

    let hasDot = false;
    let hasExp = false;

    // check for decimal point
    if (peek() === ".") {
      hasDot = true;
      buffer += read();
      while (!eof() && isDigit(peek()))
        buffer += read();
    }

    // check for exponent
    if (
      peek() === "e" ||
      peek() === "E"
    ) {
      hasExp = true;
      buffer += read();
      while (!eof() && isDigit(peek()))
        buffer += read();
    }    

    // check for float suffix
         if (match("f32") || match("f")) return Token.F32(Range.new(from, i), buffer);
    else if (match("f64") || match("F")) return Token.F64(Range.new(from, i), buffer);
    else if (hasDot || hasExp)           return Token.F64(Range.new(from, i), buffer);
    else                                 return Token.I64(Range.new(from, i), buffer);
  }

  function readSymbol(from: Index) {
    const c = read();

    switch (c) {
      case ";": return Token.Semicolon(Range.new(from, i));
      case "(": return Token.LParen (Range.new(from, i));
      case ")": return Token.RParen (Range.new(from, i));
      case "[": return Token.LBrack (Range.new(from, i));
      case "]": return Token.RBrack (Range.new(from, i));
      case "{": return Token.LBrace (Range.new(from, i));
      case "}": return Token.RBrace (Range.new(from, i));
      case "=": return Token.Equal  (Range.new(from, i));
      case ",": return Token.Comma  (Range.new(from, i));
      case ":": return Token.Colon  (Range.new(from, i));
      case ".": return Token.Dot    (Range.new(from, i));
      case "+": return Token.Plus   (Range.new(from, i));
      case "-": return Token.Minus  (Range.new(from, i));
      case "%": return Token.Percent(Range.new(from, i));
      
      case "*": 
        if (match("*"))
          return Token.StarStar(Range.new(from, i));
        else
          return Token.Star    (Range.new(from, i));

      case "/": 
        if (match("/"))
          return Token.SlashSlash(Range.new(from, i));
        else
          return Token.Slash     (Range.new(from, i));

      case "<":
             if (match("<"))
          return Token.LAngleAngle(Range.new(from, i));
        else if (match("="))
          return Token.LAngleEqual(Range.new(from, i));
        else
          return Token.LAngle     (Range.new(from, i));

      case ">":
             if (match(">"))
          return Token.RAngleAngle(Range.new(from, i));
        else if (match("="))
          return Token.RAngleEqual(Range.new(from, i));
        else
          return Token.RAngle     (Range.new(from, i));
    }
    throw `[readSymbol] Unexpected character '${c}' at ${from.row}:${from.col}`;
  }

  function readUnique(from: Index) {
    let buffer = "";
    while (!eof() && (
      isUnder(peek()) ||
      isAlpha(peek()) ||
      isDigit(peek())
    )) buffer += read();

    switch (buffer) {
      case "if"    : return Token.If    (Range.new(from, i));
      case "elif"  : return Token.Elif  (Range.new(from, i));
      case "else"  : return Token.Else  (Range.new(from, i));
      case "loop"  : return Token.Loop  (Range.new(from, i));
      case "each"  : return Token.Each  (Range.new(from, i));
      case "skip"  : return Token.Skip  (Range.new(from, i));
      case "break" : return Token.Break (Range.new(from, i));
      case "yield" : return Token.Yield (Range.new(from, i));
      case "return": return Token.Return(Range.new(from, i));
      case "is"    : return Token.Is    (Range.new(from, i));
      case "in"    : return Token.In    (Range.new(from, i));
      case "as"    : return Token.As    (Range.new(from, i));
      case "mut"   : return Token.Mut   (Range.new(from, i));
      case "ref"   : return Token.Ref   (Range.new(from, i));
      case "not"   : return Token.Not   (Range.new(from, i));
      case "and"   : return Token.And   (Range.new(from, i));
      case "or"    : return Token.Or    (Range.new(from, i));
      default: return Token.Id(Range.new(from, i), buffer);
    }
  }

  while (!eof()) {
    skipSpace();
    if (eof())
      break;

    const c = peek();
         if (isDot  (c) && peek(2) !== "..") yield readNumber(i);
    else if (isDigit(c)                    ) yield readNumber(i);
    else if (isQuote(c)                    ) yield readString(i);
    else if (isUnder(c) || isAlpha(c)      ) yield readUnique(i);
    else                                     yield readSymbol(i);
  }
}



export namespace Number {
  export type I8  = { is: "i8" , value: Uint8Array }
  export type I16 = { is: "i16", value: Uint8Array }
  export type I32 = { is: "i32", value: Uint8Array }
  export type I64 = { is: "i64", value: Uint8Array }

  export type U8  = { is: "u8" , value: Uint8Array }
  export type U16 = { is: "u16", value: Uint8Array }
  export type U32 = { is: "u32", value: Uint8Array }
  export type U64 = { is: "u64", value: Uint8Array }

  export type F32 = { is: "f32", value: Uint8Array }
  export type F64 = { is: "f64", value: Uint8Array }

  export type Add    = { is: "number.add"  , lhs: Number.Like, rhs: Number.Like }
  export type Sub    = { is: "number.sub"  , lhs: Number.Like, rhs: Number.Like }
  export type Mul    = { is: "number.mul"  , lhs: Number.Like, rhs: Number.Like }
  export type Div    = { is: "number.div"  , lhs: Number.Like, rhs: Number.Like }
  export type Mod    = { is: "number.mod"  , lhs: Number.Like, rhs: Number.Like }
  export type Pow    = { is: "number.pow"  , lhs: Number.Like, rhs: Number.Like }
  export type Low    = { is: "number.low"  , lhs: Number.Like, rhs: Number.Like }

  export type Range  = { is: "number.range", lhs: Number.Like, rhs: Number.Like }

  export type Pos = { is: "number.pos", value: Number.Like }
  export type Neg = { is: "number.neg", value: Number.Like }

  export type Like = I8 | I16 | I32 | I64 | U8 | U16 | U32 | U64 | F32 | F64
}

