import { SvgGenerator, variant } from 'shared/components/ui/SvgGenerator';

export const getStars = (type: string) => {
    switch (type) {
        case 'basic':
            return (
                <div className="exercise__stars">
                    <SvgGenerator id={variant.star} />
                    <SvgGenerator id={variant.star} />
                    <SvgGenerator id={variant.star} />
                </div>
            );
        case 'auxiliary':
            return (
                <div className="exercise__stars">
                    <SvgGenerator id={variant.star} />
                    <SvgGenerator id={variant.star} />
                </div>
            );
        case 'corrective':
            return (
                <div className="exercise__stars">
                    <SvgGenerator id={variant.star} />
                </div>
            );
    }
};
