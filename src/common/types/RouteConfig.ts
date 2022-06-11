export class RouteConfig {
    path?: string;
    element?: () => JSX.Element;
    icon?: any;

    fromJson(input: any): RouteConfig {
        if (input && input !== null) {
            this.path = input.path;
            this.element = input.element;
            this.icon = input.icon;
        }
        return this;
    }
}
