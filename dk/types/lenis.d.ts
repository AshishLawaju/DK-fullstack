declare module "lenis" {
  class Lenis {
    on(event: string, handler: (e: any) => void): void;
    raf(time: any): void;
  }
  export default Lenis;
}
