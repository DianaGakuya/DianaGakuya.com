import React, { useState } from 'react';
import { Card } from './ui/card';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { DollarSign, Briefcase, Code, Palette, Sparkles } from 'lucide-react';

type JobType = 'fulltime' | 'contract' | null;
type ServiceType = 'fullstack' | 'figma' | 'both' | null;

export function HireDeeCalculator() {
  const [jobType, setJobType] = useState<JobType>(null);
  const [serviceType, setServiceType] = useState<ServiceType>(null);
  const [showSalary, setShowSalary] = useState(false);

  const handleJobTypeSelect = (type: JobType) => {
    setJobType(type);
    setShowSalary(false);
  };

  const handleServiceTypeSelect = (type: ServiceType) => {
    setServiceType(type);
    if (jobType) {
      setShowSalary(true);
    }
  };

  const getSalaryInfo = () => {
    if (!jobType || !serviceType) return null;

    if (jobType === 'fulltime') {
      return {
        kes: '250,000',
        usd: '2,400',
        period: 'per month',
        note: 'Minimum for full-time position',
      };
    } else {
      return {
        kes: '150,000',
        usd: '1,500',
        period: 'per month',
        note: 'Contract/Part-time rate',
      };
    }
  };

  const salaryInfo = getSalaryInfo();

  return (
    <Card className="p-8 shadow-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent">
      <div className="flex items-center gap-3 mb-6">
        <Sparkles className="h-6 w-6 text-primary" />
        <h3 className="text-2xl">Hire Dee - Interactive Calculator</h3>
      </div>

      <div className="space-y-8">
        {/* Step 1: Job Type Selection */}
        <div>
          <Label className="text-lg mb-4 block">
            Step 1: What type of work are you looking for? 💼
          </Label>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleJobTypeSelect('fulltime')}
              className={`p-6 rounded-xl border-2 transition-all hover-sound ${
                jobType === 'fulltime'
                  ? 'border-primary bg-primary/10 shadow-lg scale-105'
                  : 'border-border hover:border-primary/50 hover:bg-accent'
              }`}
            >
              <Briefcase className={`h-8 w-8 mx-auto mb-3 ${jobType === 'fulltime' ? 'text-primary' : 'text-muted-foreground'}`} />
              <div className="font-semibold mb-1">Full-Time (9-5)</div>
              <div className="text-xs text-muted-foreground">Permanent position</div>
            </button>

            <button
              onClick={() => handleJobTypeSelect('contract')}
              className={`p-6 rounded-xl border-2 transition-all hover-sound ${
                jobType === 'contract'
                  ? 'border-primary bg-primary/10 shadow-lg scale-105'
                  : 'border-border hover:border-primary/50 hover:bg-accent'
              }`}
            >
              <Code className={`h-8 w-8 mx-auto mb-3 ${jobType === 'contract' ? 'text-primary' : 'text-muted-foreground'}`} />
              <div className="font-semibold mb-1">Contract/Part-Time</div>
              <div className="text-xs text-muted-foreground">Project-based work</div>
            </button>
          </div>
        </div>

        {/* Step 2: Service Type Selection */}
        {jobType && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Label className="text-lg mb-4 block">
              Step 2: What services do you need? 🎨
            </Label>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => handleServiceTypeSelect('fullstack')}
                className={`p-4 rounded-xl border-2 transition-all hover-sound ${
                  serviceType === 'fullstack'
                    ? 'border-primary bg-primary/10 shadow-lg scale-105'
                    : 'border-border hover:border-primary/50 hover:bg-accent'
                }`}
              >
                <Code className={`h-6 w-6 mx-auto mb-2 ${serviceType === 'fullstack' ? 'text-primary' : 'text-muted-foreground'}`} />
                <div className="text-sm font-semibold">Full Stack</div>
                <div className="text-xs text-muted-foreground">Development only</div>
              </button>

              <button
                onClick={() => handleServiceTypeSelect('figma')}
                className={`p-4 rounded-xl border-2 transition-all hover-sound ${
                  serviceType === 'figma'
                    ? 'border-primary bg-primary/10 shadow-lg scale-105'
                    : 'border-border hover:border-primary/50 hover:bg-accent'
                }`}
              >
                <Palette className={`h-6 w-6 mx-auto mb-2 ${serviceType === 'figma' ? 'text-primary' : 'text-muted-foreground'}`} />
                <div className="text-sm font-semibold">Figma Design</div>
                <div className="text-xs text-muted-foreground">Design only</div>
              </button>

              <button
                onClick={() => handleServiceTypeSelect('both')}
                className={`p-4 rounded-xl border-2 transition-all hover-sound ${
                  serviceType === 'both'
                    ? 'border-primary bg-primary/10 shadow-lg scale-105'
                    : 'border-border hover:border-primary/50 hover:bg-accent'
                }`}
              >
                <Sparkles className={`h-6 w-6 mx-auto mb-2 ${serviceType === 'both' ? 'text-primary' : 'text-muted-foreground'}`} />
                <div className="text-sm font-semibold">Both</div>
                <div className="text-xs text-muted-foreground">Design + Dev</div>
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Salary Display */}
        {showSalary && salaryInfo && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Label className="text-lg mb-4 block">
              Step 3: My Salary Expectations 💰
            </Label>
            <div className="bg-primary/10 rounded-xl p-6 border-2 border-primary/30">
              <div className="flex items-center justify-center gap-2 mb-4">
                <DollarSign className="h-6 w-6 text-primary" />
                <span className="text-sm text-muted-foreground">{salaryInfo.note}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-4">
                <div className="text-center p-4 bg-background/50 rounded-lg">
                  <div className="text-xs text-muted-foreground mb-1">Kenyan Shillings</div>
                  <div className="text-3xl font-semibold text-primary mb-1">
                    KES {salaryInfo.kes}
                  </div>
                  <div className="text-sm text-muted-foreground">{salaryInfo.period}</div>
                </div>

                <div className="text-center p-4 bg-background/50 rounded-lg">
                  <div className="text-xs text-muted-foreground mb-1">US Dollars</div>
                  <div className="text-3xl font-semibold text-primary mb-1">
                    ${salaryInfo.usd}
                  </div>
                  <div className="text-sm text-muted-foreground">{salaryInfo.period}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary" className="bg-primary/20">
                  {jobType === 'fulltime' ? 'Full-Time Position' : 'Contract Work'}
                </Badge>
                <Badge variant="secondary" className="bg-primary/20">
                  {serviceType === 'fullstack' && 'Full Stack Development'}
                  {serviceType === 'figma' && 'Figma Design'}
                  {serviceType === 'both' && 'Design + Development'}
                </Badge>
              </div>

              <div className="mt-6 p-4 bg-background/70 rounded-lg border border-primary/20">
                <p className="text-sm text-center text-muted-foreground">
                  💡 <span className="text-foreground font-semibold">Note:</span> These are minimum rates. 
                  Final compensation depends on project scope, complexity, and requirements. 
                  Let's discuss your specific needs!
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Initial State Message */}
        {!jobType && (
          <div className="text-center py-6">
            <p className="text-muted-foreground">
              👆 Select a job type above to see my salary expectations
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}
